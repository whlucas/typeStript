// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportMovie from '../../../app/model/Movie';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Movie: ReturnType<typeof ExportMovie>;
    User: ReturnType<typeof ExportUser>;
  }
}
