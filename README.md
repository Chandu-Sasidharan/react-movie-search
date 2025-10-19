# Multi-API Integration with React Query and MUI

This repository features a React application that integrates multiple movie-related APIs using React Query for efficient data fetching and state management. It employs React Hook Form for robust form handling and Material UI for a sleek, responsive interface. The application dynamically retrieves and displays movie data from Trakt.tv and OMDB APIs, either through user searches or by showcasing trending films with detailed descriptions.

## Features

-   **Multiple API Integration**: Efficiently pulls movie data from Trakt.tv and OMDB.
-   **React Query**: Manages API calls, caching, and state with automatic data updates.
-   **React Hook Form**: Streamlines and validates form inputs for movie searches.
-   **Material UI (MUI)**: Modern and responsive design using Material UI components.
-   **Error Handling**: Ensures smooth user experiences with robust error management.
-   **Dynamic Search**: Updates search results in real-time as user queries change.

## Prerequisites

Before you begin, ensure you have met the following requirements:

-   API keys for [Trakt.tv](https://trakt.docs.apiary.io/#introduction/api-url) and [OMDB](https://www.omdbapi.com/apikey.aspx).

## Setup Instructions

### Clone the Repository

```bash
git clone https://github.com/Chandu-Sasidharan/react-movie-search.git
cd react-movie-search
```

### Install Dependencies

```bash
npm install
```

### Environment Setup

Create a `.env` file in the root directory and add the following environment variables:

```
VITE_TRAKT_CLIENT_ID=your_trakt_client_id
VITE_OMDB_API_KEY=your_omdb_api_key
```

### Run Locally

Start the development server:

```bash
npm run dev
```

## Usage

The application enables users to:

-   Automatically view trending movies on the homepage.
-   Search for movies and see their details.
-   Serve as a demo for educational purposes.

## Support

For support, questions, or feedback, reach out to me via email at [mail@chandu-sasidharan.de](mailto:mail@chandu-sasidharan.de).
