import path from "path";
import url from "url";
// import { getUsers } from "../utils/server-utils";
import App from "./(myapp)/page";

const Index = async () => {
  const absolutePath = path.join(
    path.dirname(url.fileURLToPath(import.meta.url))
  );
  console.log(absolutePath);

  // const users = await getUsers();
  // console.log(users);

  return (
    <>
      <App />
    </>
  );
};

export default Index;
