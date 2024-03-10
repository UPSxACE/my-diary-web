export interface LoginBody {
  username: string;
  password: string;
}

export interface RegisterBody {
  username: string;
  name: string;
  email: string;
  password: string;
}

export interface NewNoteBody {
  title: string;
  content: string;
  contentRaw: string;
}
