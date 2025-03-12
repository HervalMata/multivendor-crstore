import ThemeToggle from "@/components/shared/theme-toggle";

export default function Home() {
  return (
      <div className="p-5">
        <div className="w-180 flex justify-end">
          <ThemeToggle />
        </div>
        <h1 className='font-bold text-pink-400'>Welcome to CrStore</h1>
      </div>

  );
}
