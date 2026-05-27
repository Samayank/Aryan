import cv2
import numpy as np
import ezdxf
import os

def convert_png_to_dxf(input_path, output_path):
    """
    Converts a PNG image with a logo/shapes into a DXF vector file.
    """
    print(f"Reading image: {input_path}...")
    
    # 1. Read the image in grayscale mode
    img = cv2.imread(input_path, cv2.IMREAD_GRAYSCALE)
    if img is None:
        raise FileNotFoundError(f"Could not read the image file at '{input_path}'. Please check the path.")

    # 2. Thresholding to create a binary image
    # The logo is black on a white background. 
    # We use THRESH_BINARY_INV to make the logo white (255) and background black (0) 
    # because OpenCV finds contours of white objects.
    _, thresh = cv2.threshold(img, 127, 255, cv2.THRESH_BINARY_INV)

    # 3. Find contours
    # RETR_TREE retrieves all contours and reconstructs a full hierarchy of nested contours
    # CHAIN_APPROX_SIMPLE compresses horizontal, vertical, and diagonal segments 
    # and leaves only their end points.
    print("Extracting contours...")
    contours, hierarchy = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

    # 4. Initialize a new DXF document
    doc = ezdxf.new('R2010')
    msp = doc.modelspace()

    # Get image dimensions to correctly map coordinates
    height, width = img.shape

    print(f"Found {len(contours)} contours. Generating DXF...")
    
    # 5. Draw the contours into the DXF modelspace
    for contour in contours:
        # Smooth the contour slightly to reduce DXF file size and jagged edges (Optional)
        epsilon = 0.001 * cv2.arcLength(contour, True)
        approx = cv2.approxPolyDP(contour, epsilon, True)
        
        points = []
        for point in approx:
            x, y = point[0]
            # Invert the Y-axis:
            # Image coordinates (0,0) are Top-Left.
            # CAD coordinates (0,0) are Bottom-Left.
            points.append((x, height - y))
            
        # Draw the contour as a closed Lightweight Polyline if it has valid geometry
        if len(points) > 2:
            msp.add_lwpolyline(points, close=True)

    # 6. Save the DXF file
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    doc.saveas(output_path)
    print(f"Success! DXF file saved to: {output_path}")

if __name__ == "__main__":
    # Specify your file names here
    INPUT_IMAGE = "sanware.png"
    OUTPUT_DXF = "dxfFile/sanware_logo.dxf"
    
    if os.path.exists(INPUT_IMAGE):
        convert_png_to_dxf(INPUT_IMAGE, OUTPUT_DXF)
    else:
        print(f"Error: Please ensure '{INPUT_IMAGE}' is in the same folder as this script.")