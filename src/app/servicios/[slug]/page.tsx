import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServicePage({
  params,
}: ServicePageProps) {
  const { slug } = await params;

  const supabase = await createClient();

  const { data: service, error } = await supabase
    .from("services")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !service) {
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

      {/* HERO DEL SERVICIO */}
      <section className="detail-hero">

        <div className="container">

          <Link
            href="/#servicios"
            className="back-link"
          >
            ← Volver a servicios
          </Link>

          <span className="section-tag">
            SERVICIO INDUSTRIAL
          </span>

          <div className="detail-grid">

            {/* INFORMACIÓN */}
            <div className="detail-content">

              <span className="detail-category">
                {service.category}
              </span>

              <h1>
                {service.title}
              </h1>

              <p className="detail-description">
                {service.description}
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
                  href="/#servicios"
                  className="secondary-button"
                >
                  Ver otros servicios
                </Link>

              </div>

            </div>

            {/* VISUAL */}
            <div className="detail-visual">

              <div className="detail-card">

                <span className="detail-card-number">
                  GRUPO MEINSAL
                </span>

                <div className="detail-gear">
                  ⚙
                </div>

                <div className="detail-card-bottom">

                  <strong>
                    Soluciones industriales
                  </strong>

                  <span>
                    Precisión · Experiencia · Compromiso
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* INFORMACIÓN ADICIONAL */}
      <section className="detail-info">

        <div className="container">

          <div className="detail-info-grid">

            <div>

              <span className="section-tag">
                GRUPO MEINSAL
              </span>

              <h2>
                Soluciones adaptadas a cada necesidad.
              </h2>

            </div>

            <div>

              <p>
                Nuestro equipo trabaja de acuerdo con los
                requerimientos técnicos de cada proyecto,
                buscando ofrecer soluciones prácticas y
                confiables para diferentes operaciones
                industriales.
              </p>

              <p>
                Cada servicio puede adaptarse a las
                características, necesidades y objetivos
                específicos de nuestros clientes.
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
              ¿NECESITAS ESTE SERVICIO?
            </span>

            <h2>
              Hablemos de tu
              <span> proyecto.</span>
            </h2>

            <p>
              Contáctanos para conocer tus necesidades y
              conversar sobre una posible solución.
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