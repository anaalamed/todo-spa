export async function get_random_joke() {
  try {
    const url = `https://api.chucknorris.io/jokes/random`;
    return await (await fetch(url)).json();
  } catch (err) {
    console.log("Error - getRandomJoke() ", err);
    throw err;
  }
}
