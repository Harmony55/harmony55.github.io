import os
from PIL import Image

def crop_images_in_folder(folder_path):
    for filename in os.listdir(folder_path):
        if filename.endswith(".jpg") or filename.endswith(".png"):
            img = Image.open(os.path.join(folder_path, filename))
            cropped_img = img.crop((66, 87, 66+285, 87+285))
            cropped_img.save(os.path.join(folder_path, filename))
            print(f"{filename} has been cropped and saved as cropped_{filename}")

crop_images_in_folder("./")
