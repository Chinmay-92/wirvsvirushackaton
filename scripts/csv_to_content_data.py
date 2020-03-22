#!/usr/bin/env python3
import json
import csv
import sys
import re

# This script prepares language content data for our project

BULLET_POINT_INLINE = "&#149;"

def convert(f_in, f_out):

    with open(f_in) as csv_file:
        csv_reader = csv.DictReader(csv_file, delimiter=";")
        #print(csv_reader.fieldnames)

        resources_dict = {}
        for rows in csv_reader:
            # Read id and split in number and language
            full_id = rows['id']
            full_id = full_id.split(sep=":")
            id_num = full_id[0]
            id_lang = full_id[1]

            if  not id_lang in resources_dict:
                resources_dict[id_lang] = {'translations' : {}}

            # Read title
            title = rows['title']
            
            # Read description, image, url
            desc = rows['description']
            desc = format_bullet_points(desc)

            img = rows['image']
            url = rows['suburl']

            # Build the inner content added to the dict
            line_content_dict = {'title'+id_num:title, 'description'+id_num:desc, 'imageUrl'+id_num:img, 'subUrl'+id_num : url}

            # Add the inner content to a language specific dict
            lang_dict = resources_dict[id_lang]
            lang_dict['translations'].update(line_content_dict)

        # Write JSON outfile
        with open(f_out, 'w') as json_file:
            #data = {'resources':[{'name': 'Scott', 'website': 'stackabuse.com', 'from': 'Nebraska'}]}
            data = {'resources':{'name': 'Scott', 'website': 'stackabuse.com', 'from': 'Nebraska'}}
            #print(json.dumps(data, indent=4))
            json.dump({'resources': resources_dict}, json_file, indent=4)



def format_bullet_points(text):
    #Replace placeholder of bullet points with proper bullet point symbol
    regex = re.compile(r"\/\-\s*")
    return regex.sub(BULLET_POINT_INLINE + " ", text)



if __name__ == "__main__":
    # Check for args
    if len(sys.argv) < 3:
        print("Run with: \"python3 csv_to_content_data.py data/ifile.csv data/out.txt\"")
        sys.exit()
    # Read input args
    f_in = sys.argv[1]
    f_out = sys.argv[2]

    # Do csv to content data conversion
    convert(f_in, f_out)