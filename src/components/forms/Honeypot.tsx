export default function Honeypot() {
  return (
    <div className="sr-only-hp" aria-hidden="true">
      <label htmlFor="hp-website">Website</label>
      <input id="hp-website" name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
    </div>
  );
}
