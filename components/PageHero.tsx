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
    <section className="mast">
      <div className="mast-copy">
        <p className="eyebrow">Second Plate</p>
        <h1>{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
      </div>
      <figure>
        <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} />
        {photo.credit ? <figcaption>{photo.credit}</figcaption> : null}
      </figure>
    </section>
  );
}
