import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const ProgressLine = (props: {
    percentage: number;
    fillColor: string;
}) => {
    const ref = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const width = document?.querySelector('#root .container')?.clientWidth ?? 300;
        const height = 100;    
        const radius = 50;
        const border = 5;
        const twoPi = Math.PI * 2;
        const formatPercent = d3.format('.0%');
        const arc = d3.arc()
            .startAngle(0)
            .innerRadius(radius)
            .outerRadius(radius - border);
        const progress = Number((props.percentage / 100).toFixed(2));

        const svgElement: any = d3.select(ref.current);
        svgElement.attr("viewBox", [0, 0, width, height]).attr('class', 'line-chart');

        const g = svgElement.append('g').attr('class', 'g-transform').attr('transform', `translate(${width/2}, ${height/2})`);

        const meter = g.append('g').attr('class', 'progress-meter');
        meter.append('path')
            .attr('class', 'background')
            .attr('fill', '#ccc')
            .attr('fill-opacity', 0.5)
            .attr('d', arc.endAngle(twoPi));

     
        const front = meter.append('path')
            .attr('class', 'foreground')
            .attr('fill', props.fillColor)
            // .attr('fill', 'none')
            // .attr("stroke", "red")
            // .attr("stroke-width", 3)
            // .style("stroke-linecap", "round")
            .attr('fill-opacity', 1);

        const displayText = meter.append('text')
            .attr('fill', '#333')
            .attr('text-anchor', 'middle')
            .attr('dy', '.35em');

        // foreground.attr('d', arc.endAngle(twoPi * progress));
        front.attr('d', arc.endAngle(twoPi * progress));
        displayText.text(formatPercent(progress));

    }, [props]);


    return (
        <div className="line-chart-container">
            <svg ref={ref}></svg>
        </div>
    )

}
export default ProgressLine;