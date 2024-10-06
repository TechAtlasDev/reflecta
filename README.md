# Reflecta

For the development of this project it is necessary to start from certain aspects, one of them is to properly define the development path that we are going to follow in order to have a good performance in the use of technologies and the development of the project.

## Project Description
Reflecta is a progressive web application (PWA) designed to allow users to access and visualize reflectance data from satellite images. Using the Google Earth Engine API to use Landsat 9, the application will provide tools for the visualization and analysis of geospatial data, helping users to obtain information about land cover and changes in the environment. The user interface will be modern and responsive, built with React, Tailwind CSS, and DaisyUI, and will be implemented in Vercel for fast and efficient access.

## Main Objectives
- **Access to Satellite Data**: Allow users to access reflectance data from satellite images.
- **Interactive Visualization**: Provide interactive charts and visualizations of the data to make it easier to understand.
- **Friendly Interface**: Create a modern and easy-to-use user interface that is accessible on mobile and desktop devices.
- **Efficient Deployment**: Deploy the application as a PWA and deploy it to Vercel to optimize performance and availability.
- **Data Download:** Enable the ability to download Landsat 9 data in required formats such as CSV.

## Project Path

### Step 1: Project Setup [COMPLETED]
- **Objectives**:
- Set up the development environment and project foundations.
- **Tasks**:
1. Configure DjanNavbargo and create a new project.
2. Initialize a new project with Vite.
3. Verify the backend and frontend installation.

### Step 2: Defining Models and API
- **Goals**:
- Create the data model and configure the REST API.
- **Tasks**:
1. Define the models in Django.
2. Configure serializers and views.
3. Configure the API routes.

### Step 3: Data Integration
- **Goals**:
- Implement the logic to get data from the Landsat API.
- **Tasks**:
1. Research the Landsat API.
2. Develop the functionality to get data.
3. Test the data integration.

### Step 4: Setting Up the Interface [DONE - PROTOTYPE]
- **Goals**:
- Establish the basic structure and components of the interface.
- **Tasks**:
1. Create the component structure.
2. Implement navigation with React Router.
3. Set up styles with Tailwind CSS and DaisyUI.

### Step 5: Charts and data visualization
- **Goals**:
- Implement the logic to visualize the reflectance data.
- **Tasks**:
1. Select a chart library.
2. Create the chart component.
3. Style the component with Tailwind CSS.

### Step 6: Connect the frontend and backend
- **Goals**:
- Integrate the UI with the backend API.
- **Tasks**:
1. Make requests to the API from the frontend.
2. Handle data state in React.
3. Verify the data flow.

### Step 7: PWA implementation
- **Goals**:
- Turn your app into a progressive web app.
- **Tasks**:
1. Set up the manifest for the PWA.
2. Implement service workers.
3. Test the PWA functionality on mobile devices.

### Step 8: UI Style and Improvements
- **Goals**:
- Improve the user experience and styles of the app.
- **Tasks**:
1. Review and improve the UI.
2. Implement animations and transitions.
3. Verify that the app is responsive.

### Step 9: Testing and Debugging
- **Goals**:
- Test the app and fix bugs.
- **Tasks**:
1. Perform functional testing.
2. Debug any bugs found.
3. Verify the app's security.

### Step 10: Documentation and Preparing for Delivery
- **Goals**:
- Document the project and prepare for delivery.
- **Tasks**:
1. Create the documentation in `README.md`.
2. Review the code and comment on it.
3. Prepare a brief presentation of the project.

## Additional information

- Web implementation: https://reflecta-nasa.vercel.app/