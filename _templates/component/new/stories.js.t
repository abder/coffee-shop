---
to: src/<%=h.getTypePath(locals.type)%>/<%=name%>/<%=name%>.stories.mdx
---
import { Meta, Story, Canvas, ArgsTable } from '@storybook/addon-docs';
import { <%=name%> } from './<%=name%>';
import { action } from "@storybook/addon-actions";

<Meta title="<%=h.getType(locals.type)%>/<%=name%>" component={<%=name%>} argTypes={{}}/>

export const Template = (args) => <<%=name%> {...args} />;

# <%=name%>
This is the description of <%=name%>

<Canvas>
  <Story name="Default" args={{}}>
    {Template.bind()}
  </Story>
</Canvas>

<ArgsTable story="Default" />



