export interface IInitialStateModal {
  loading: boolean;
  pending: boolean;
  hasError: boolean;
  data: any[];
  error: {};
}

export const initialStateModal: IInitialStateModal = {
  loading: true,
  pending: false,
  hasError: false,
  data: [],
  error: {}
};
