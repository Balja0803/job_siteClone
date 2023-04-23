import { JobType } from "@/util/types";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Style from "../../styles/JobCard.module.css";
import { useUserContext } from "../../../context/UserContext";

export default function Job({ data: job }: { data: JobType }): JSX.Element {
  const { user, setUser } = useUserContext();
  console.log("jobPage:", job);

  function logoutHandler() {
    setUser(false);
  }

  return (
    <div>
      {user ? (
        <div className={Style.wrap}>
          <div className={Style.jobCard}>
            <h1 className={Style.cardTitle}>{job.title}</h1>
            <p className={Style.cardDisc}>{job.description}</p>
            <span className={Style.cardmoney}>{job.payment}$</span>
            <p className={Style.contractType}>{job.contractType}</p>
          </div>
          <button
            onClick={() => console.log("clicked")}
            className={Style.button}
          >
            Apply
          </button>
          <button onClick={logoutHandler}>logout</button>
        </div>
      ) : (
        <div>Please login to see content</div>
      )}
    </div>
  );
}

export const getStaticPaths = async () => {
  const result = await fetch(`http://localhost:5000/job/job_id`);
  const resJob = await result.json();
  console.log("resJob", resJob);
  const paths = await resJob.map((id: { _id: string }) => ({
    params: { id: id._id },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

interface JobProps {
  data: JobType | null;
}

export const getStaticProps: GetStaticProps<JobProps> = async ({
  params,
}: GetStaticPropsContext) => {
  const res = await fetch(`http://localhost:5000/job/${params?.id}`);
  console.log("res", res);
  const resjson = await res.json();
  console.log("resjson", resjson);
  return {
    props: {
      data: resjson,
    },
  };
};
