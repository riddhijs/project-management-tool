import {  createApi, fetchBaseQuery,  } from "@reduxjs/toolkit/query";

type Project={
    id: number,
    name: string,
    description?: string,
    startDate?: string,
    endDate?: string,

}
enum Status{
    Todo ="To Do",
    WorkInProgress ="Work In Progrress",
    underReview= "Under Review",
    Completed="Completed"
}
enum Priority {
    Urgent = "Urgent",
    High= "High",
    Medium="Medium",
    Low="Low",
    Backlog="Backlog"
}
type User = any;
type Comment = any;
type Attachment = any;

type Task =  {
    id:number
    title:string,
    description?:string,
    status?:Status,
    priority?:Priority,
    tags?:string,
    startDate?:string,
    dueDate?:string,
    points?:number,
    projectId:string,
    authorUserId?:number,
    assignedUserId?:number,
    author?:User,
    assignee?:User,
    comments?:Comment[]
    attachments?:Attachment[]
  }
export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl:process.env.NEXT_PUBLIC_API_BASE_URL}),
    reducerPath:'api',
    tagTypes:["Projects"],
    endpoints:(build)=>({
        getProjects: build.query<Project[],void>({
        query:()=>"projects",
        providesTags:["Projects"]
        }) 
    })
})
export const {} = api