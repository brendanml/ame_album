#!/bin/bash

# Get a list of all items in the current directory
items=(*)

# Initialize an empty string to hold the output
output=""

# Loop through each item and append it to the output string
for item in "${items[@]}"; do
    output+="\"assets/$item\","
done

# Remove the trailing comma
output=${output%,}

# Print the final output
echo $output
