export const getOptionsByType = (type?: string) => {
  if (type === 'number' || type === 'date') {
    return [
      { value: '=', text: '=' },
      { value: '>', text: '>' },
      { value: '<', text: '<' },
    ];
  }

  if (type === 'string') {
    return [
      { value: 'contains', text: 'содержит' },
    ];
  }

  return [];
}
