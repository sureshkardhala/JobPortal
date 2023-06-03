import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import JoditEditor from "jodit-react";
import { uploadAction } from "./Actions";

const Upload = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const config = {
    placeholder: "Start typing......",
  };
  const [imgUpload, setImgUpload] = useState("");
  const onChangeImgUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  };
  const handleReaderLoaded = (e) => {
    const binaryString = "data:image;base64," + btoa(e.target.result);
    setImgUpload(binaryString);
  };

  const onSubmit = (data) => {
    data = { ...data, jobImage: imgUpload, jobDescription: content };
    console.log(data);
    uploadAction(data);
  };

  return (
    <div className="w-full h-fit py-10 px-2 bg-gray-300 min-h-screen">
      <div className="w-full md:w-5/6 h-fit m-auto px-4 md:px-10 py-4 border-2 border-white shadow-md bg-white">
        <h1 className="text-lg my-4 font-semibold">Upload Job Details</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="mt-10">
            <label>Job Title </label>
            <br />
            <input
              {...register("jobTitle", { required: true })}
              type="text"
              placeholder="Enter Job Title"
              className="w-full h-8 mt-2 rounded-md px-2 border-[1px] border-gray-400  focus-within:outline-sky-200"
              aria-invalid={errors.jobTitle ? "true" : "false"}
              autoComplete="off"
            />
            {errors.jobTitle?.type === "required" && (
              <p role="alert" className="text-red-500">
                *required
              </p>
            )}
          </div>
          <div className="mt-10">
            <label>Apply Link </label>
            <br />
            <input
              {...register("jobLink", { required: true })}
              type="text"
              placeholder="Enter Job Link"
              className="w-full h-8 mt-2 rounded-md px-2 border-[1px] border-gray-400  focus-within:outline-sky-200"
              aria-invalid={errors.jobTitle ? "true" : "false"}
              autoComplete="off"
            />
            {errors.jobLink?.type === "required" && (
              <p role="alert" className="text-red-500">
                *required
              </p>
            )}
          </div>
          <div className="w-full flex flex-wrap justify-between">
            <div className="w-full md:w-80 mt-10">
              <label>Degree </label>
              <br />
              <input
                {...register("qualificationDegree", { required: true })}
                type="text"
                placeholder="Enter Qualification Degree"
                className="w-full h-8 mt-2 rounded-md px-2 border-[1px] border-gray-400  focus-within:outline-green-200"
                aria-invalid={errors.qualificationDegree ? "true" : "false"}
                autoComplete="off"
              />
              {errors.qualificationDegree?.type === "required" && (
                <p role="alert" className="text-red-500">
                  *required
                </p>
              )}
            </div>
            <div className="w-full md:w-80 mt-10">
              <label>Batch </label>
              <br />
              <input
                {...register("qualificationBatch", { required: true })}
                type="text"
                placeholder="Enter Qualification Batch"
                className="w-full h-8 mt-2 rounded-md px-2 border-[1px] border-gray-400  focus-within:outline-blue-200"
                aria-invalid={errors.qualificationBatch ? "true" : "false"}
                autoComplete="off"
              />
              {errors.qualificationBatch?.type === "required" && (
                <p role="alert" className="text-red-500">
                  *required
                </p>
              )}
            </div>
            <div className="w-full md:w-80 mt-10">
              <label>Branch </label>
              <br />
              <input
                {...register("qualificationBranch", { required: true })}
                type="text"
                placeholder="Enter Qualification Branch"
                className="w-full h-8 mt-2 rounded-md px-2 border-[1px] border-gray-400  focus-within:outline-pink-300"
                aria-invalid={errors.qualificationBranch ? "true" : "false"}
                autoComplete="off"
              />
              {errors.qualificationBranch?.type === "required" && (
                <p role="alert" className="text-red-500">
                  *required
                </p>
              )}
            </div>
          </div>
          <div className="w-full mt-10">
            <label>Company Image </label>
          </div>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px Below 1MB)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                {...register("companyImage", { required: true })}
                className="hidden"
                aria-invalid={errors.companyImage ? "true" : "false"}
                accept=".jpg, .jpeg, .png"
                onChange={onChangeImgUpload}
                autoComplete="off"
              />
              {errors.companyImage?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Image required to upload
                </p>
              )}
            </label>
          </div>

          <div className="w-full h-fit mt-10 ">
            <label>Description</label>
            <JoditEditor
              // {...register("jobDescription", { required: true })}
              ref={editor}
              value={content}
              onChange={(newContent) => setContent(newContent)}
              autoComplete="off"
              config={config}
            />
            {content === "" && (
              <p role="alert" className="text-red-500">
                *required
              </p>
            )}
          </div>
          {content !== "" && imgUpload !== "" && (
            <div className="w-full flex flex-row space-x-20 mt-10">
              <button
                type="submit"
                className="w-28 h-10 text-white bg-green-500 rounded-md"
              >
                Upload Job{" "}
              </button>
              <button
                type="reset"
                className="w-28 h-10 text-white bg-red-500 rounded-md"
              >
                Reset
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Upload;
