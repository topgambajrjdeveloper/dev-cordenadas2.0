import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import { useRouter } from "next/router";
import { AuthProvider } from "../context";
import es from "../locales/es";
import en from "../locales/en";

function Home({ repositories }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;
  return (
    <AuthProvider>
      <ContainerBlock title={t.title} description={t.description}>
        <Hero />
        <FavouriteProjects />
        <LatestCode repositories={repositories} />
      </ContainerBlock>
    </AuthProvider>
  );
}

export const getServerSideProps = async () => {
  //console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories
    }
  };
};

export default Home;
