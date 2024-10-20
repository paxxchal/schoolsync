"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

// USE LAZY LOADING

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <h1>Loading...</h1>,
});
const SubjectForm = dynamic(() => import("./forms/SubjectForm"), {
  loading: () => <h1>Loading...</h1>,
});
const ParentForm = dynamic(() => import("./forms/ParentForm"));
const ClassForm = dynamic(() => import("./forms/ClassForm"));
const LessonForm = dynamic(() => import("./forms/LessonForm"));
const ExamForm = dynamic(() => import("./forms/ExamForm"));
const AssignmentForm = dynamic(() => import("./forms/AssignmentForm"));
const ResultForm = dynamic(() => import("./forms/ResultForm"));
const AttendanceForm = dynamic(() => import("./forms/AttendanceForm"));
const EventForm = dynamic(() => import("./forms/EventForm"));
const AnnouncementForm = dynamic(() => import("./forms/AnnouncementForm"));

const forms: {
  [key: string]: (
    setOpen: Dispatch<SetStateAction<boolean>>,
    type: "create" | "update",
    data?: any
  ) => JSX.Element;
} = {
  subject: (setOpen, type, data) => (
    <SubjectForm type={type} data={data} setOpen={setOpen} />
  ),
  teacher: (type, data, setOpen) => (
    <TeacherForm type={type} data={data} setOpen={setOpen} />
  ),
  student: (type, data, setOpen) => (
    <StudentForm type={type} data={data} setOpen={setOpen} />
  ),
  parent: (type, data, setOpen) => (
    <ParentForm type={type} data={data} setOpen={setOpen} />
  ),
  class: (type, data, setOpen) => (
    <ClassForm type={type} data={data} setOpen={setOpen} />
  ),
  lesson: (type, data, setOpen) => (
    <LessonForm type={type} data={data} setOpen={setOpen} />
  ),
  exam: (type, data, setOpen) => (
    <ExamForm type={type} data={data} setOpen={setOpen} />
  ),
  assignment: (type, data, setOpen) => (
    <AssignmentForm type={type} data={data} setOpen={setOpen} />
  ),
  result: (type, data, setOpen) => (
    <ResultForm type={type} data={data} setOpen={setOpen} />
  ),
  attendance: (type, data, setOpen) => (
    <AttendanceForm type={type} data={data} setOpen={setOpen} />
  ),
  event: (type, data, setOpen) => (
    <EventForm type={type} data={data} setOpen={setOpen} />
  ),
  announcement: (type, data, setOpen) => (
    <AnnouncementForm type={type} data={data} setOpen={setOpen} />
  ),
};

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id: number | string;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-caesarPink"
      : type === "update"
      ? "bg-caesarSkyLight"
      : "bg-caesarBlueLight";

  const [open, setOpen] = useState(false);

  const Form = () => {
    const [state, formAction] = useFormState(deleteSubject, {
      success: false,
      error: false,
    });

    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](setOpen, type, data)
    ) : (
      "Form not found"
    );
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
