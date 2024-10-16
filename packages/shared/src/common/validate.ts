import { plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";

function validate<T extends new (...args: any[]) => any>(classConstructor: T, config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(
    classConstructor,
    config,
    { enableImplicitConversion: true },
  );

  const errors = validateSync(validatedConfig, { skipMissingProperties: false });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}

export {
  validate
}