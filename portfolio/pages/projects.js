import Layout from "@components/layout";
import ProjectItem from "@components/projects/project-item";
import { TOKEN, DATABASE_ID } from "../config";

export default function Project({ projects }) {
  console.log(projects);
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-6 mb-10">
        <h1 className="text-xl font-bold sm:text-4xl">
          총 프로젝트 :
          <span className="pl-4 text-blue-500">{projects.results.length}</span>
        </h1>

        <div className="grid grid-cols-1 gap-8 py-12 m-4 md:grid-cols-2 ">
          {projects.results.map((aProject) => (
            <ProjectItem key={aProject.id} data={aProject} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

//빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-02-22",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await res.json();

  const projectNames = projects.results.map(
    (Project) => Project.properties.Name.title[0].plain_text
  );

  console.log(`projectNames ${projectNames}`);
  return {
    props: { projects }, // will be passed to the page component as props
  };
}
