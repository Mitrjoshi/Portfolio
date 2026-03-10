import { SectionTitles } from "@/components/SectionTitles";
import { certificates } from "@/constants";

export const CertificateSection = () => {
  return (
    <section className="flex flex-col gap-3">
      <SectionTitles title="Certificates" />

      <div className="flex flex-col gap-2">
        {certificates.map((certificate) => (
          <div key={certificate.id} className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p className="text-lg font-bold hover:underline text-background">
                  {certificate.title}
                </p>
                <p className="block sm:hidden text-sm text-background">
                  {certificate.year}
                </p>
              </div>
              <div className="flex flex-col items-end gap-0.5">
                <p className="hidden sm:block text-sm text-background">
                  {certificate.year}
                </p>
              </div>
            </div>

            <ol>
              {certificate.description.map((desc) => (
                <li key={desc} className="text-xs text-pretty text-background">
                  - {desc}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
};
