import type { Photo } from "@/lib/site";

export function PageHero({
  title,
  lede,
  photo,
}: {
  title: string;
  lede?: string;
  photo: Photo;
}) {
  return (
    <section className="page-hero">
      <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} />
      <div className="scrim" />
      <div className="page-hero-copy">
        <h1>{title}</h1>
        {lede ? <p>{lede}</p> : null}
        {photo.credit ? <p className="photo-credit">{photo.credit}</p> : null}
      </div>
    </section>
  );
}
