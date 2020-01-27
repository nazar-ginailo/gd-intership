export const GOLF_SCORES = {
  HOLE_IN_ONE: `Hole_in_one`,
  EAGLE: `Eagle`,
  BIRDIE: `Birdie`,
  PAR: `Par`,
  BOGEY: `Bogey`,
  DOUBLE_BOGEY: `Double Bogey`,
  GO_HOME: `Go Home`,
};

export function golfScore(par, strokes) {
  switch (true) {
    case (strokes === 1):
      return GOLF_SCORES.HOLE_IN_ONE;
    case (strokes <= par - 2):
      return GOLF_SCORES.EAGLE;
    case (strokes === par - 1):
      return GOLF_SCORES.BIRDIE;
    case (strokes === par):
      return GOLF_SCORES.PAR;
    case (strokes === par + 1):
      return GOLF_SCORES.BOGEY;
    case (strokes === par + 2):
      return GOLF_SCORES.DOUBLE_BOGEY;
    default:
      return GOLF_SCORES.GO_HOME;
  }
}
