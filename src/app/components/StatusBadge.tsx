import { ProjectType } from "./constants/ProjectType";

export const StatusBadge = ({ status }: { status: ProjectType["status"] }) => {
    const colors: Record<NonNullable<ProjectType["status"]>, string> = {
        Completed: "bg-green-500 text-white",
        "In Progress": "bg-yellow-500 text-black",
        "Early Access": "bg-blue-500 text-white",
    };


  if (!status) return null;

  return (
    <span className={`px-1 py-1 text-sm rounded-full font-semibold ${colors[status]}`}>
      {status}
    </span>
  );
};
