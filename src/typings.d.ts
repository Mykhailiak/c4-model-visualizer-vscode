declare module 'c4-model-visualizer-core/utils/yaml-parser' {
  function validate(input: string): boolean;

  function parse(input: string): object | never;

  function parseAsync(input: string): Promise<object>;
}
