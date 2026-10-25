// Static export has no image optimizer; just prefix the GitHub Pages basePath.
export default function loader({ src }: { src: string }) {
  return `${process.env.BASE_PATH ?? ""}${src}`;
}
