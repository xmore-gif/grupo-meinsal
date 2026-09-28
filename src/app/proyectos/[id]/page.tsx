import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

type ProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { id } = await params;

  const projectId = Number(id);

  if (!Number.isInteger(projectId)) {
    notFound();
  }

  const supabase = await createClient();

  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", projectId)
    .single();

  if (error || !project) {
    notFound();
  }

  return (
    <main className="detail-page">

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

            <Link href="/#inicio">
              Inicio
            </Link>

            <Link href="/#servicios">
              Servicios
            </Link>

            <Link href="/#proyectos">
              Proyectos
            </Link>

            <Link href="/#contacto">
              Contacto
            </Link>

          </div>

          <Link
            href="/#contacto"
            className="nav-button"
          >
            Contáctanos
          </Link>

        </div>
      </nav>

      {/* HERO */}
      <section className="detail-hero">

        <div className="container">

          <Link
            href="/#proyectos"
            className="back-link"
          >
            ← Volver a proyectos
          </Link>

          <span className="section-tag">
            PROYECTO INDUSTRIAL
          </span>

          <div className="detail-grid">

            {/* INFORMACIÓN */}
            <div className="detail-content">

              <span className="detail-category">
                {project.category}
              </span>

              <h1>
                {project.title}
              </h1>

              <p className="detail-description">
                {project.description}
              </p>

              <div className="detail-actions">

                <Link
                  href="/#contacto"
                  className="primary-button"
                >
                  Solicitar información
                  <span>→</span>
                </Link>

                <Link
                  href="/#proyectos"
                  className="secondary-button"
                >
                  Ver otros proyectos
                </Link>

              </div>

            </div>

            {/* VISUAL */}
            <div className="detail-visual">

              <div className="detail-card">

                <span className="detail-card-number">
                  PROYECTO{" "}
                  {String(project.id).padStart(2, "0")}
                </span>

                <div className="detail-gear">
                  ⚙
                </div>

                <div className="detail-card-bottom">

                  <strong>
                    Grupo Meinsal
                  </strong>

                  <span>
                    Soluciones industriales
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* INFORMACIÓN */}
      <section className="detail-info">

        <div className="container">

          <div className="detail-info-grid">

            <div>

              <span className="section-tag">
                EXPERIENCIA
              </span>

              <h2>
                Soluciones desarrolladas para la industria.
              </h2>

            </div>

            <div>

              <p>
                Cada proyecto representa una oportunidad
                para desarrollar soluciones adaptadas a
                las necesidades específicas de una operación
                industrial.
              </p>

              <p>
                Grupo Meinsal combina experiencia técnica,
                fabricación y mantenimiento para responder
                a diferentes desafíos de la industria.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACTO */}
      <section className="contact-section">

        <div className="container contact-content">

          <div>

            <span className="section-tag">
              ¿TIENES UN PROYECTO?
            </span>

            <h2>
              Hablemos de tu
              <span> necesidad.</span>
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
            Contactar
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