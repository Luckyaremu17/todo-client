import { Box, Checkbox, Typography } from "@material-ui/core";

const TodoItem = ({ props, onItemChecked }) => {
  return (
    <Box
      style={{
        marginBottom: 5,
        backgroundColor: "#628fd9",
        borderRadius: 5,
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Checkbox
        onChange={onItemChecked}
        style={{ display: "inline-block", color: "#fff" }}
        checked={props.IsDeleted}
      />
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <Typography style={{ color: "#fff", fontSize: 14, textAlign: "left" }}>
          {props.Title}
        </Typography>
        {props?.IsDeleted ? (
          <Typography
            style={{
              color: "#fff",
              fontSize: 12,
              textAlign: "left",
              textDecoration: "line-through",
            }}
          >
            {props.Text}
          </Typography>
        ) : (
          <Typography
            style={{ color: "#fff", fontSize: 12, textAlign: "left" }}
          >
            {props.Text}
          </Typography>
        )}{" "}
      </Box>
    </Box>
  );
};

export default TodoItem;
