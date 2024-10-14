import SharedServiceTitle1 from "../shared/SharedServiceTitle1";
import Image from "next/image";

const ServiceTeamSection = ({data}) => {
  return (
    <section className="service_team wrapper">
      <div className="container">
        <SharedServiceTitle1
          title={`متخصصین ما در ${data.acf.title}`}
          eng={`our staff`}
        />
        <div className="row justify-content-center align-items-center">
          <div className="row p-0">
            <div className="col-xxl-4 col-xl-5 col-lg-6">
              <div className="service_team_manager">
                <Image
                  src={data.acf.manager_img}
                  width={224}
                  height={332}
                  alt={data.acf.manager_name}
                  loading="lazy"
                />
                <div className="text">
                  <span className="name">{data.acf.manager_name}</span>
                  <span className="jobTitle">{data.acf.manage_job}</span>
                  <p>{data.acf.manager_massage}</p>
                </div>
              </div>
            </div>
            {data.acf.team.map((team) => (
              <div
                key={team.index}
                className="col-xxl-2 col-xl-3 col-sm-4 col-6"
              >
                <div className="service_team_staff">
                  <Image
                    src={team.person_img}
                    width={224}
                    height={200}
                    alt={team.name}
                    loading="lazy"
                  />
                  <div className="text">
                    <span className="name">{team.name}</span>
                    <span className="jobTitle">{team.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTeamSection;
