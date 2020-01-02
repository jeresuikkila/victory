/*eslint-disable no-magic-numbers*/
import React from "react";
import { storiesOf } from "@storybook/react";
import { VictoryStack } from "../packages/victory-stack/src/index";
import { VictoryArea } from "../packages/victory-area/src/index";
import { VictoryBar } from "../packages/victory-bar/src/index";
import { VictoryTheme } from "../packages/victory-core/src/index";
import { getData } from "./data";
import { getChartDecorator } from "./decorators";

storiesOf("Themes.default", module).add("Area", () => <VictoryArea />);
storiesOf("Themes.default", module).add("Bar", () => <VictoryBar />);

storiesOf("Themes.area", module)
  .addDecorator(getChartDecorator({ theme: VictoryTheme.material }))
  .add("material theme", () => <VictoryArea data={getData(8)} />)
  .add("material theme stacked", () => (
    <VictoryStack labels={({ datum }) => datum.x}>
      <VictoryArea data={getData(8)} />
      <VictoryArea data={getData(8, "seed-1")} />
      <VictoryArea data={getData(8, "seed-2")} />
      <VictoryArea data={getData(8, "seed-3")} />
      <VictoryArea data={getData(8, "seed-4")} />
    </VictoryStack>
  ));
