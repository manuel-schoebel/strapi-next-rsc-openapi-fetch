import React from "react";

interface IBlocksRenderer {
  blocks: any[];
  blocksMap: any;
}

interface IBlock {
  block: any;
  blocksMap?: any;
}

function Block({ block, blocksMap }: IBlock) {
  if (!block) return <p>Empty component passed</p>;
  if (!blocksMap) return <p>componentMap cannot be undefined</p>;

  // TODO: __typename might be different using TYPO3
  const { __component, ...componentProps } = block;

  if (!__component) return <p>__typename cannot be undefined</p>;
  if (__component === "Error") return <p>__typename equals Error</p>;

  // not each __component is within the type of IComponentConfiguration

  const componentKey = `${__component}_${block.id}`;

  if (blocksMap[__component]) {
    const Comp = blocksMap[__component];

    return (
      <Comp key={componentKey} {...componentProps} __typename={__component} />
    );
  }

  return (
    <p key={componentKey}>
      {`Component ${__component} was used but has not been implemented
        yet.`}
    </p>
  );
}

export function BlocksRenderer({ blocks, blocksMap }: IBlocksRenderer) {
  if (!blocks || blocks.length === 0) {
    return <p>No blocks to render</p>;
  }

  return (
    <>
      {blocks.map((c: any) => {
        console.log("render", c);
        if (!c.__component) return <p>no __component</p>;
        if (!c.id) return <p>no id</p>;

        return (
          <Block
            key={`${c.__component}-${c.id}`}
            block={c}
            blocksMap={blocksMap}
          />
        );
      })}
    </>
  );
}
