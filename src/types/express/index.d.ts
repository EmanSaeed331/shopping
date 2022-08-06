import express from "express";

declare global {
  namespace Express {
    interface Request {
      User?: Record<string,any>
      file: Record<any,any>
      body:Record<string,any>
      params:Record<string,any>

    }
  }
}