import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

function ServiceIcon({ type }: { type: number }) {
  const commonProps = {
    width: 46,
    height: 46,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  if (type === 0) {
    return (
      <svg {...commonProps}>
        <circle
          cx="24"
          cy="24"
          r="7"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M24 4v6M24 38v6M4 24h6M38 24h6M9.86 9.86l4.24 4.24M33.9 33.9l4.24 4.24M38.14 9.86l-4.24 4.24M14.1 33.9l-4.24 4.24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M24 13a11 11 0 1 0 11 11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === 1) {
    return (
      <svg {...commonProps}>
        <path
          d="M9 18h8l5-5h8l9 9-5 5-9-9-5 5H12l-3-3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M30 13l5-5M34 17l5-5M14 30l-5 5M18 34l-5 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="27"
          cy="20"
          r="2"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (type === 2) {
    return (
      <svg {...commonProps}>
        <path
          d="M24 5c2 7-6 10-6 17a6 6 0 0 0 12 0c0-4-2-7-1-11 3 3 7 7 7 13a12 12 0 1 1-24 0c0-6 4-11 12-19Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M24 26c-2 2-3 4-3 6a3 3 0 0 0 6 0c0-2-1-4-3-6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === 3) {
    return (
      <svg {...commonProps}>
        <path
          d="M7 38h34"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M10 34V18h28v16"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M15 18v-6h18v6M15 24h4M24 24h4M15 29h4M24 29h4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="34"
          cy="29"
          r="2"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path
        d="M29 8a9 9 0 0 0-8 12L8 33l7 7 13-13a9 9 0 0 0 12-8l-7 5-5-5 1-8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M10 38l5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="33"
        cy="14"
        r="2"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export default async function Home() {
  const supabase = await createClient();

  const { data: services, error: servicesError } = await supabase
    .from("services")
    .select("*")
    .eq("featured", true)
    .order("id", { ascending: true });

  const { data: projects, error: projectsError } = await supabase
    .from("projects")
    .select("*")
    .eq("featured", true)
    .order("id", { ascending: true });

  if (servicesError || projectsError) {
    throw new Error(
      "No se pudieron cargar los datos de Grupo Meinsal."
    );
  }

  return (
    <main>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container nav-content">

          <Link href="/" className="logo">
            <span className="logo-mark">M</span>

            <span>
              GRUPO <strong>MEINSAL</strong>
            </span>
          </Link>

          <div className="nav-links">
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </div>

          <a href="#contacto" className="nav-button">
            Contáctanos
          </a>

        </div>
      </nav>


      {/* HERO */}
      <section id="inicio" className="hero">

        <div className="hero-grid" />

        <div className="container hero-content">

          <div className="hero-text">

            <span className="section-tag">
              INGENIERÍA · MANTENIMIENTO · FABRICACIÓN
            </span>

            <h1>
              Soluciones que
              <span> mantienen </span>
              tu industria en movimiento.
            </h1>

            <p>
              En Grupo Meinsal brindamos servicios de mantenimiento
              industrial y fabricación de piezas para empresas que
              necesitan soluciones confiables, precisas y eficientes.
            </p>

            <div className="hero-actions">

              <a
                href="#servicios"
                className="primary-button"
              >
                Conoce nuestros servicios
                <span>→</span>
              </a>

              <a
                href="#proyectos"
                className="secondary-button"
              >
                Ver proyectos
              </a>

            </div>

          </div>


          {/* HERO VISUAL */}
          <div className="hero-visual">

            <div className="industrial-card">

              <div className="card-top">
                <span>GRUPO MEINSAL</span>
                <span>01 / 04</span>
              </div>

              <div className="gear-large">
                ⚙
              </div>

              <div className="card-bottom">

                <strong>
                  Ingeniería industrial
                </strong>

                <span>
                  Precisión · Experiencia · Compromiso
                </span>

              </div>

            </div>

            <div className="floating-card">

              <span className="floating-icon">
                ✓
              </span>

              <div>

                <strong>
                  Calidad y precisión
                </strong>

                <span>
                  Soluciones industriales
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* SOBRE NOSOTROS */}
      <section className="intro">

        <div className="container intro-grid">

          <div>

            <span className="section-tag">
              SOBRE NOSOTROS
            </span>

            <h2>
              Experiencia para resolver
              <span> desafíos industriales.</span>
            </h2>

          </div>

          <div className="intro-text">

            <p>
              Grupo Meinsal desarrolla soluciones orientadas
              a las necesidades de la industria salvadoreña,
              combinando conocimiento técnico, fabricación
              y mantenimiento.
            </p>

            <p>
              Nuestro objetivo es contribuir a la continuidad
              de las operaciones de nuestros clientes mediante
              trabajos confiables y soluciones adaptadas
              a cada proyecto.
            </p>

          </div>

        </div>

      </section>


      {/* SERVICIOS */}
      <section
        id="servicios"
        className="services-section"
      >

        <div className="container">

          <div className="section-heading">

            <div>

              <span className="section-tag">
                LO QUE HACEMOS
              </span>

              <h2>
                Nuestros servicios
              </h2>

            </div>

            <p>
              Soluciones diseñadas para acompañar las
              necesidades de mantenimiento y producción
              de nuestros clientes.
            </p>

          </div>


          <div className="services-grid">

            {services?.map((service, index) => (

              <article
                className="service-card"
                key={service.id}
              >

                <span className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="service-icon">
                  <ServiceIcon type={index} />
                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                <Link
                  href={`/servicios/${service.slug}`}
                >
                  Ver servicio →
                </Link>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* PROYECTOS */}
      <section
        id="proyectos"
        className="projects-section"
      >

        <div className="container">

          <div className="section-heading light">

            <div>

              <span className="section-tag">
                EXPERIENCIA
              </span>

              <h2>
                Proyectos destacados
              </h2>

            </div>

            <p>
              Una muestra de las soluciones que podemos
              desarrollar para diferentes necesidades
              industriales.
            </p>

          </div>


          <div className="projects-grid">

            {projects?.map((project) => (

              <Link
                href={`/proyectos/${project.id}`}
                className="project-card"
                key={project.id}
              >

                <span>
                  {String(project.id).padStart(2, "0")}
                </span>

                <div>

                  <small>
                    {project.category}
                  </small>

                  <h3>
                    {project.title}
                  </h3>

                </div>

                <strong>
                  ↗
                </strong>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* CONTACTO */}
      <section
        id="contacto"
        className="contact-section"
      >

        <div className="container contact-content">

          <div>

            <span className="section-tag">
              HABLEMOS
            </span>

            <h2>
              ¿Tienes un proyecto
              <span> industrial?</span>
            </h2>

            <p>
              Cuéntanos qué necesitas y exploremos juntos
              una solución para tu operación.
            </p>

          </div>

          <a
            href="mailto:contacto@grupomeinsal.com"
            className="primary-button"
          >
            Solicitar información
            <span>→</span>
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer>

        <div className="container footer-content">

          <Link
            href="/"
            className="logo"
          >

            <span className="logo-mark">
              M
            </span>

            <span>
              GRUPO <strong>MEINSAL</strong>
            </span>

          </Link>

          <p>
            © 2026 Grupo Meinsal. Soluciones industriales.
          </p>

        </div>

      </footer>

    </main>
  );
}