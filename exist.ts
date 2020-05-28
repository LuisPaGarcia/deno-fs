import { exists } from "https://deno.land/std@0.51.0/fs/mod.ts";

const found = await exists('/folder');
console.log('Found:', found);