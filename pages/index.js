import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import { useRouter } from "next/router";
import es from "../locales/es";
import en from "../locales/en";
import { ToastContainer } from "react-toastify";

function Home({ repositories }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;
  return (
    <>
      <ContainerBlock title={t.title} description={t.description}>
        <Hero />
        <FavouriteProjects />
        <LatestCode repositories={repositories} />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ContainerBlock>
    </>
  );
}

export const getServerSideProps = async () => {
  //console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);
  if (!repositories) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      repositories
    }
  };
};

export default Home;
