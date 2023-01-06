import {FormEvent, ChangeEvent, MouseEvent} from 'react'

type formEvent = FormEvent<HTMLFormElement>;
type changeEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type mouseEvent = MouseEvent<HTMLButtonElement>;

export type {
    formEvent,
    changeEvent,
    mouseEvent
}