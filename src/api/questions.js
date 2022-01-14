const url =
  "http://my-json-server.typicode.com/DanielBarbakadze/Advanced-JS-and-React-Basics/db";

export default async function getQuestions() {
  return await fetch(url).then((res) => res.json());
}
