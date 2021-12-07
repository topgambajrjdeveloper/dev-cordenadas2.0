import React, { useEffect} from "react";
import userData from "@constants/data";
import { useRouter } from 'next/router';
import es from "../locales/es";
import en from "../locales/en";
import   useProjects  from '../hooks/useProjects'
import { map } from "lodash";

export default function Projects() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'es' ? es : en;

  const { proyectos,  getProjects } = useProjects()
  useEffect(async () => { getProjects(); }, []);
  console.log(proyectos);


  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          {t.projects}
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {/* {userData.projects.map(({ title, link, imgUrl }, idx) => (
            <ProjectCard
              title={title}
              link={link}
              imgUrl={imgUrl}
              number={`${idx + 1}`}
            />
          ))} */}
          {map(proyectos, ({ title, link, project_image }, idx) => (
            <a href={link} target="_blank" className="w-full block shadow-2xl">
              <div className="relative overflow-hidden">
                <div className="h-72 object-cover">
                  {/* <img key={idx}
                    src={project_image}
                    alt={alt_text}
                    className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
                  /> */}
                  {map(project_image, (image, index) => (
                    <img key={index}
                      src={image.image}
                      alt={image.alt_text}
                      className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
                    />
                  ))}
                </div>
                <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                  {title}
                </h1>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// const ProjectCard = ({ alt_text, link, project_image, number }) => {
//   return (
//     <a href={link} target="_blank" className="w-full block shadow-2xl">
//       <div className="relative overflow-hidden">
//         <div className="h-72 object-cover">
//           <img key={}
//               src={}
//               alt={}
//               className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
//             />
          
//         </div>
//         <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
//           {title}
//         </h1>
//         <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
//           {number.length === 1 ? "0" + number : number}
//         </h1>
//       </div>
//     </a>
//   );
// };
