import { describe,it,expect } from 'vitest'; import { analyseSwing } from '../lib/ai';
describe('AI parsing',()=>{it('returns validated demo analysis without API key',async()=>{process.env.DEMO_MODE='true';const a=await analyseSwing({frames:[],cameraAngle:'down-the-line',club:'Mid iron'});expect(a.drills.length).toBeLessThanOrEqual(2)})});
