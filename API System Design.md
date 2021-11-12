# Web App Restful API System Design

## High Level Design

Within a simple note taking app the main components are:

1. The client, a web based app in this case.
2. A webserver to handle the various requests made by the client. Such as save a note, delete a note and get all notes.
3. The API's on the web server that will dictate how to handle those requests.
4. A database to store the notes.

![System overview](./SystemOverview.png?raw=true)

## Web App UI

Below are a few wireframes for the note taking web app.
A couple of optional components are included as 'low hanging fruit' to improve overall usability of the app however these components can be omitted based on time restraints. The required and optional components are listed below.

### First time usage

![mockup for first time usage page](./NoNotes.png?raw=true)

### Creating a new note

![mockup for creating a new note](./NewNote.png?raw=true)

### View existing note

![mockup for viewing existing note](./ViewNote.png?raw=true)

### Required Components

#### Note

In the wireframe there are 2 primary types of note:

A note within the list, this is a smaller and less detailed version of a note.
The current note in focus, this can be of two types as well:
Viewing an existing note and the ability to delete this note
Creating a new note and the ability to save this note

#### Create Note Button

Ability to create a new note is one of the main requirements.

### Optional Components

#### Sidebar

The sidebar is not a requirement and can simply be removed if time constraints are too strict. The idea is to provide some basic filtering of the notes to provide a better user experience. In the long run this would want to be built upon to include a search feature but is out of the scope of this design.

#### Header

Not a requirement, simply another user experience increase and a relatively simple feature to implement. Within the header the current logged in user’s name is displayed along with a logout button.

### Validation

- Is note content required? If so validation to prevent saving an empty note is needed.
- Escaping HTML

## Data Model

```js
const note = {
  note_id: number,
  note_title?: string,
  note_body: string,
  user_id: number,
  date_created: date
}
```

Within the data model there are a couple of extra properties added, neither are requirements but are relatively easy to implement and enable a few extra features for the future development of the app. The date created in particular make it easier for users to sort/filter through their notes and while this isn’t an immediate requirement it may be in the future and creating a future proof API early on is important.

## Restful API

As a user is already logged in, and there is an assumption that the web app maintains a user session then is it safe to assume we can store an Auth token within that user session to authenticate future requests such as getting, deleting and saving notes.

Each user would have a unique ID which is evident from the fact that users must be logged in to use the app. This user ID can be used to fetch all users notes from a database, a GET request which includes the user’s ID and the Auth token for authentication would be made to the server which would handle getting the correct data from the database and returning it to the client web app.

A similar approach would be used for saving a note, a payload which includes all relevant data such as user ID, note title, note body and date would be sent to the web server via a POST request. The server would then handle storing this in a database.

### API URLS

#### GET notes belonging to a user

`api.feefonotes.com/notes?user_id=[USER_ID]`

#### POST note belonging to a user

`api.feefonotes.com/notes`

#### DELETE specific note

`api.feefonotes.com/notes?note_id=[NOTE_ID]`

## Web Server

Each action will have some similar functionality.

Processing the incoming request and extracting the following:

- user ID or note ID from the params
- extracting Auth Token from headers
- Performing Auth checks to ensure user has correct privileges
  From which the following actions can be safely peformed:

### POST

Validate payload to ensure all required data is present. Then build a query to store the note data into the database. Respond with the note that has been saved, could be used for notifying the user in a future feature.

### DELETE

Build a query to delete the note with the provided ID from the database. Respond with the note being deleted, could be used for notifying the user in a future feature

### GETALL

Build a query for getting all the notes belonging to the current user using the user ID provided. Then respond with all of the notes returned from the database query.
