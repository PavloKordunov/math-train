import { PartialType } from "@nestjs/mapped-types";
import { CreateTestDto } from "./createTestDto";

export class UpdateTestDto extends PartialType(CreateTestDto) {}