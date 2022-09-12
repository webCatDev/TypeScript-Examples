interface ErrorContainer {
    [prop: string] : string
}

const errorBag: ErrorContainer = {
    DuplicateNameError: 'Names must be uniques',
    LengthError: 'Length must be at least 6 characters'
}