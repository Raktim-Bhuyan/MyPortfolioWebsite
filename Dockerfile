# Creating the base image 
FROM nginx:1.27.0-alpine

#adds user raktim
RUN adduser -D raktim

# sets current user to raktim instead of default of root 
USER raktim

#copy the rest of the application code to working directory
COPY . .

#adding meta data for easy identification of image
LABEL CREATOR="Raktim Bhuyan"