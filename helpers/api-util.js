import {MongoClient} from 'mongodb';

async function connectToClientMongodb() {
  const client = new MongoClient(process.env.NEXT_PUBLIC_DB_HOST);
  await client.connect();
  return client;
}

export async function setContact(dbName, collectionName, newData) {
  const client = await connectToClientMongodb();
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  await collection.insertOne(newData);
  await client.close();
  return newData;

}

export async function getAllProjects(collection) {
  const projects = [];

  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_HOST}/${collection}.json`);
    if (result.ok === false) {
      throw new Error(`Network response was not ok: ${result.status}`);
    }

    const data = await result.json();
    if (!data) {
      throw new Error(`No data found`);
    }

    if (collection === 'projects') {
      for (const key in data) {
        projects.push({
          id: key,
          ...data[key]
        });
      }
    } else {
      projects.push(data);
    }
  } catch (error) {

    return ({data: null, message: `${error.name}`})
  }

  const sortedProjects = projects.sort((project, prevProject) => {
    const yearsPrevProject = prevProject.date.split('-');
    const years = project.date.split('-');

    return (years[1] > yearsPrevProject[1] ? -1 : 1)
  })
  return ({data: sortedProjects, message: 'All done!'})
}

export async function getReactProjects(collection) {
  const {data, message} = await getAllProjects(collection);
  if (data === null) {
    return ({data, message})
  }

  const reactProjects = data.filter((project) => project.project_type === 'react');
  return ({data: reactProjects, message})
}


export async function getProjectById(id, collection) {
  const {data, message} = await getAllProjects(collection);
  if (data === null) {
    return ({data, message})
  }

  const project = data.find((project) => project.slug === id);

  return {data: project || null, message: !project ? 'no project was found' : message}
}

export async function getFilteredProjects(projectsType, collection) {
  const {data, message} = await getAllProjects(collection);
  if (data === null) {
    return ({data, message})
  }

  const projects = data.filter((project) => project.project_type === projectsType);

  return {data: projects || null, message: !projects ? 'no projects was found' : message}
}

