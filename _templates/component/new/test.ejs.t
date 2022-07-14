---
to: src/<%=h.getTypePath(locals.type)%>/<%=name%>/<%=name%>.test.js
---
import { render } from '@testing-library/react';

import  { <%=name%> } from './<%=name%>';

describe('<%=name%>', () => {
    it('renders as expected', () => {
        const { container } = render(<<%=name%> />);
        expect(container).toMatchSnapshot();
    })
})