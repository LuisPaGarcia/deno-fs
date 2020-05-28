import {
  writeFileStrSync,
  writeFileStr,
} from 'https://deno.land/std@0.51.0/fs/mod.ts'
;(async () => {
  // Async
  await writeFileStr('./output/writeFileAsync.dat', 'file content async')
  // Sync
  writeFileStrSync('./output/writeFileSync.dat', 'file content sync')
})()
