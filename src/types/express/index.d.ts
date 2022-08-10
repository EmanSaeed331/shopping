import express from "express";

declare global {
  namespace Express {
    interface Request {
      User: Record<string,any>
      file: Record<any,any>
      body:Record<string,any>
      params:Record<string,any>

    }
  }
}

declare namespace Express {
  export interface Request {
      user: any;
  }
  export interface Response {
      user: any;
  }
  export interface Response {
    products: any;
}
}